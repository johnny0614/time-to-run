import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <p>
        Running a marathon is hard. Setting up your training plan shouldn't be. Save time on planning and give yourself more <span className={"primary"}><b>Time to Run</b></span>.
      </p>
      <ol>
        <li>Set the date of your race</li>
        <li>Pick a plan</li>
        <li>Choose miles or kilometers</li>
        <li>Download the plan and add it to your calendar</li>
      </ol>
      <p>It really is that easy. <Link to={"/"}>Get Started Now!</Link></p>
      <h2>Edit a Plan or Create Your Own</h2>
      <p>
        Choose the plan you want as a base (or the "New" plans if you want a
        blank slate) and then click the edit icon next to the title of the plan
        to begin editing, or press "alt+e". You can change the title,
        add and remove workouts with the icons or "alt+n" and "alt+d",
        and even reorder them to tailor the workout exactly how you want them
        by dragging on the "arrows" icon or pressing "alt+up" or "alt+down".
        To reorder workouts in edit mode, simply drag the "arrows" icon or use
        the keyboard shortcuts "alt+up arrow" or "alt+down arrow".
      </p>
      <p>
        You can also edit the description of the workouts to change the mileage
        or add/remove details. If you don't care about switching between miles
        and kilometers, or you don't plan on sharing the plan with anybody else
        who might, you can remove/ignore all the "#" symbols and write whatever
        you want there.
      </p>
      <p>
        If you do want the plan to work for everyone, though, then here's what
        the "#" symbols are for:
      </p>
      <ol>
        <li>
          Use the "#" symbol before values that should display in the selected
          units, and the letters "D" and "d" to show "long" or "short" units
          after the values.<br />
          For example, if you have a plan written in miles, you can write a
          workout that automatically gets converted to kilometers like this:
          <ul>
            <li><b>Input:</b> Warmup #2D, 4x800m, Cooldown #2d</li>
            <li><b>Output in Miles:</b> Warmup 2 miles, 4x800m, Cooldown 2mi</li>
            <li><b>Output in Kilometers:</b> Warmup 3 kilometers, 4x800m, Cooldown 3km</li>
          </ul>
        </li>
        <li>
          The letters "D" and "d" can be omitted or they can be used on their
          own:
          <ul>
            <li><b>Input:</b> #3 without units, #D without a number</li>
            <li><b>Output in Miles:</b> 3 without units, miles without a number</li>
            <li><b>Output in Kilometers:</b> 5 without units, kilometers without a number</li>
          </ul>
        </li>
      </ol>
      <h2>Save Your Plan For Later</h2>
      <p>
        Once you've created a plan that you might want to use again in the
        future, or want to share with someone else, download the plan as a json
        or csv file so you can import the plan again the next time you need it!
      </p>
      <h2>Acknowledgements</h2>
      <p>
        This project takes inspiration from{" "}
        <a href="https://defy.org/hacks/calendarhack/about/">Calendar Hack</a>{" "}
        by <a href="https://twitter.com/defyorg">@defyorg</a> which I've already
        used for multiple marathons.
      </p>
      <p>
        This project includes a few popular training plans from{" "}
        <a href="http://www.amazon.com/Advanced-Marathoning-Edition-Pete-Pfitzinger/dp/0736074600">
          Advanced Marathoning
        </a>{" "}
        by Pete Pfitzinger and Scott Douglas,{" "}
        <a href="https://www.amazon.com/Faster-Road-Racing-Half-Marathon/dp/1450470459">
          Faster Road Racing
        </a>{" "}
        by Pete Pfitzinger and Philip Latter,{" "}
        <a href="https://hansons-running.com/collections/hansons-swag/products/hansons-method-hansons-method-mara%22">
          Hansons Marathon Method
        </a>{" "}
        by Kieth and Kevin Hanson, and{" "}
        <a href="http://www.amazon.com/Marathon-Ultimate-Training-Programs-Marathons/dp/1609612248">
          Marathon: The Ultimate Training Guide
        </a>{" "}
        by Hal Higdon. The plans are not intended to be used on their own and
        should be used in combination with the books, so please support the
        authors (and yourself!) if you don't already own them.
      </p>
      <p>You will also find a version of the popular <a href="https://www.coachmag.co.uk/5k-training/3472/running-for-beginners-free-couch-to-5k-plan">Couch to 5k program</a></p>
      <p>
        Calendar Icon made by{" "}
        <a href="https://www.flaticon.com/authors/monkik">monkik</a> from{" "}
        <a href="https://www.flaticon.com">www.flaticon.com</a>.
      </p>
      <p>
        All other icons made by Font Awesome from{" "}
        <a href="https://www.fontawesome.com">www.fontawesome.com</a>.
      </p>
      <h2>Contact Me</h2>
      <p>If you have made a plan that you think others might benefit from or if you have issues, questions, or suggestions on how I can make this project work better for you, reach out via <a href="mailto:timetorun@codyhoover.com">email</a> or <a href="https://github.com/hoovercj/time-to-run/issues">on github</a>.</p>
    </div>
  );
}

export default About;
