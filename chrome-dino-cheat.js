function autoplay() {
  setTimeout(function () {
    myinstance = this.Runner.instance_;
    myobstacles = myinstance.horizon.obstacles;

    // if my tRex is ducking then
    if (myinstance.tRex.ducking) {
      // make my tRex to duck
      myinstance.tRex.setDuck(true);
    }
    if (myinstance.crashed) {
      //   When the game is over then
      console.log("Game Over... Paste the code again to automate the game");
      return;
    }
    if (myobstacles.length > 0) {
      action = "JUMP";
      obstacle_type = myobstacles[0]["typeConfig"]["type"];

      // Defining which action to perform if it match the following cases
      if (obstacle_type == "CACTUS_SMALL" || obstacle_type == "CACTUS_LARGE") {
        action = "JUMP";
        // i know its a hard name ( actually PTERODACTYL its the bird )
      } else if (obstacle_type == "PTERODACTYL") {
        if (myobstacles[0]["yPost"] == 75 || myobstacles[0]["yPost"] == 50)
          action = "DUCK";
      }

      // Making the action work
      if (myobstacles[0].xPos <= 100) {
        console.log(myobstacles[0]);

        // Perform the action
        if (action == "JUMP") {
          console.log("Jumping.. Yahoo");
          // we get the current speed of our dino
          curr_speed = myinstance.currentSpeed;
          // then making it jump
          myinstance.tRex.startJump(curr_speed);
        } else if (action == "DUCK") {
          console.log("Ducking.. Oo");
          myinstance.tRex.setDuck(true);
        }
      }
    }
    autoplay();
    // setting the timer for 20 mili seconds
  }, 20);
}
console.log('Done.. Automated the game, Now Start')
autoplay();
