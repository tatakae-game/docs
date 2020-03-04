# Game Mechanics
The basics of the game are multiple robots controlled by algorithms, fighting to the death.
These algorithms are developed by the players behind it.

## Battery system
The battery system limits the robots movements to prevent unlimited actions from the algorithms made by the players.
Each actions takes different amount of battery.

If a robot's battery is empty, no more actions will be possible until next turn.

A game is generally configured to give **10 battery points** each turns.

## Health system
A robot usually starts with **40 health points**. Those points can be healed by different ways:
- Using 7 battery points to heal 3 health point
- Eating a *screw*
- Eating the remains of a destroyed robot

## Movements
### Rotations
Rotations can be done by left or right and lets the robots change steps direction.

**Battery cost: 1.**

### Steps
A robot can only go forward or backward, rotations are the only things that can make a robot change direction.

**Battery cost: 1.**

### Jump
Jumping can only be done forward en will jump 1 tile, making the robot advance by 2 tiles.

If a robot jumps on another robot it will do 10 damages and push the other robot 1 tile forward the jumping robot.

Falling on a *blocking obstacle* will deal 10 damages to the jumping robot then destroy the obstacle. Any other obstacles will be destroyed with no more penalties.

**Battery cost: 5.**

## Items
Items are randomly spawned on the terrain and can be used to do many actions:
- **Screws**: heal 5 health points
- **Shield**: Add +2 protection
- **Attack booster**: deal +3 damages from the next attack

## Death
Since the goal of the game is to destroy other robots and be the last one at a moment in a game your robot or other robots will be destroyed.

A destroyed robot doesn't mean that it won't work until the end of the game, in fact it can explode if the robot still have more than 5 points of battery from last turn.

**Explosion damages: 1.5 \* (remaining battery points).**

If the robot didn't exploded then its remains will be still until the game end or another robot eats them.

## Obstacles
Items are randomly spawned on the terrain and have different effects:
- **Blocking obstacles**: Blocks the robots from passing through it
- **Trees**: Cost +1 battery point to go through it
- **Ruins**: Cost +2 battery point to go through it
