import React, {
  useMemo,
  useLayoutEffect,
  useRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'

import { ISelection, saveSelection, restoreSelection } from "../lib/selection";
import { Units } from "../lib/workout";
import {
  func,
  DisplayMode,
  getDayOfWeekString,
  scrollIntoViewIfNeeded,
} from "../lib/utils";
import * as Formatter from "../lib/formatter";
import { Action, ActionType, InsertWorkoutPayload } from "../lib/reducer";

import "./Workout.scss";
export interface WorkoutProps {
  id: string;
  units: Units;
  description: string;
  totalDistance: number;
  dispatch: func<Action>;
  displayMode: DisplayMode;
  date: string;
  canMoveUp: boolean;
  canMoveDown: boolean;
  canDelete: boolean;
  activationReason?: { reason: ActionType };
  renderAsGrid: boolean;
}

const WorkoutTile = ({description}: Pick<WorkoutProps, 'description'>) => {
  return (
    <div className={'workoutTile'} title={description}>{description}</div>
  )
}

export const Workout = React.memo(function (props: WorkoutProps) {
  const {
    dispatch,
    id,
    description,
    totalDistance,
    displayMode,
    date,
    canMoveDown,
    canMoveUp,
    activationReason,
    renderAsGrid,
  } = props;

  const dateMemo = useMemo(() => new Date(date), [date]);
  const dayOfWeekString = useMemo(() => getDayOfWeekString(dateMemo), [
    dateMemo,
  ]);

  const selectionToRestore = React.useRef<ISelection | null>(null);

  const formattedHTMLValue = React.useMemo(() => {
    return Formatter.convertDescriptionToHtml(description);
  }, [description]);

  React.useEffect(() => {
    if (!contentEditableRef.current || !selectionToRestore.current) {
      return;
    }

    restoreSelection(contentEditableRef.current, selectionToRestore.current);
    selectionToRestore.current = null;
  }, [description]);


  const container = useRef<HTMLDivElement>(null);
  const moveUpButton = useRef<HTMLButtonElement>(null);
  const moveDownButton = useRef<HTMLButtonElement>(null);
  const insertButton = useRef<HTMLButtonElement>(null);
  const deleteButton = useRef<HTMLButtonElement>(null);
  const totalDistanceInputRef = useRef<HTMLInputElement>(null);
  const contentEditableRef = React.useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    // Don't change focus if this already contains it
    if (!container.current?.contains(document.activeElement)) {
      switch (activationReason?.reason) {
        case "deleteWorkout":
          deleteButton.current?.focus();
          break;
        case "insertWorkout":
          totalDistanceInputRef.current?.focus();
          totalDistanceInputRef.current?.select();
          break;
        case "moveWorkoutUp":
          if (canMoveUp) {
            moveUpButton.current?.focus();
          } else if (canMoveDown) {
            moveDownButton.current?.focus();
          } else {
            // If the workout cannot be moved up or down,
            // it shouldn't have been able to activate for
            // this reason, but just in case:
            insertButton.current?.focus();
          }
          break;
        case "moveWorkoutDown":
          if (canMoveDown) {
            moveDownButton.current?.focus();
          } else if (canMoveUp) {
            moveUpButton.current?.focus();
          } else {
            // If the workout cannot be moved up or down,
            // it shouldn't have been able to activate for
            // this reason, but just in case:
            insertButton.current?.focus();
          }
          break;
        default:
          return;
      }
    }

    document.activeElement && scrollIntoViewIfNeeded(document.activeElement);
  }, [activationReason, canMoveDown, canMoveUp]);

  useEffect(() => {
    const currentContainer = container.current;

    // Cleanup function, executes on unmount or dependency change
    return () => {
      if (
        document.activeElement &&
        currentContainer?.contains(document.activeElement)
      ) {
        dispatch({
          type: "notifyFocusedElementUnmounted",
          payload: document.activeElement.id,
        });
      }
    };
  }, [dispatch, container]);

  return (
    <div
      ref={container}
      className={`workout ${displayMode} ${renderAsGrid ? "grid" : ""}`}
    >
      {/* TODO: Add an absolutely-positioned "insert workout" action here */}
      <div className="date-column">
        <div className="my-row date-string primary">
          {dayOfWeekString}
        </div>
      </div>
      <div className="description-column">
        <div className="my-row formatted-description-row">
          <WorkoutTile
            description={description}
          />
        </div>
      </div>
      {/* TODO: Add an absolutely-positioned "insert workout" action here */}
    </div>
  );
});
