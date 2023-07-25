# The MVP

The Minimum Viable Product is what is needed for this product to launch.

If you haven't already, check out the [Y Combinator Library](https://www.ycombinator.com/library). This offers some essential advice for anyone interested in starting or understanding the startup space. Y Combinator is one of the most well-respected startup incubators.

One of the essential bits of advice they offer is to ship an MVP as quickly as possible, followed by user feedback/interviews in order to improve. This ensures you focus only on the pieces needed to be applicable to your users, and not on things that don't matter.

Therefore, I present the MVP. (I asked Notion AI to generate an MVP template below and have filled it in)

# LiftArcade

**Brief Description:**

This project will work to simplify complex workout analysis for the average gym-goer. It is **not** intended to replace a personal trainer or strength and conditioning coach. I **do** hope that it makes tracking and analyzing users' workouts easier so they can make intelligent decisions for improvement.

Right now, many workouts are created and shared on Excel sheets, which offer limited ability to track details and plan ahead. Additionally, it is hard to individualize suggestions and monitoring with Excel sheets, especially if the user is not proficient with Excel. This looks to be the next logical step from Pen & Paper > Excel sheets > **LiftArcade**.

There are several foreseeable benefits from recording and analyzing workouts, including:

- Beginners
    - **Recommended weight:** When starting out, it can be a series of trial and error finding the right weight to use. With AI assistance, it can suggest the correct weight to use to achieve the right intensity.
    - **Volume Management:** Ensure that users are hitting all muscle groups at an adequate volume to ensure improvements all around.
    - **Overall confidence:** Progress can be slow. Beginners need to know that they are adequately using and improving the right amount so they don't "Program Hop" or give up when not seeing improvements rapidly.
- Intermediate users
    - **Individual Muscle Management:** This is where we can help users the most. Planning workouts and monitoring individual muscle volume from week to week can help keep them on track and give intermediate users areas they can improve upon by ensuring no weak spots exist.
    - **Planning Assistant:** Create your own workouts, seeing total and individual workout volume for your created workout. Helps to quickly adjust and tailor your workouts to your own goals.

## Advanced users

**Target Audience:**

This product targets primarily college-aged individuals and athletes seeking to improve their training.

**Core Features:**

- Easily record and receive metrics about your workout.
- Track your running progress with a personalized profile that suggests strength levels.
- Explore a library of commonly used workouts and load them.

**MVP Development Plan:**

1. Create an account and log in to a dashboard
2. CRUD workouts
3. Use updated workouts to generate a strength profile each time a workout is changed. Use this profile to offer weight suggestions.
4. Save commonly used workouts for easy loading into the creator.

Additional items to add:

- An explore workouts and explore exercises section. This is where users can search and find popular workouts.
- A recent exercises API endpoint that pulls the recent exercises that the user has performed.