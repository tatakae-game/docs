# List of Actions & events


## Actions

### walk

```ts
{
    name: "walk",
    new_position: {x : 1, y: 3},
          robot_id: "1dfg1dfv1d6f516",
          events: [?{
            name: "bumped",
          }],
          tiles_checked: [{x : 1, y: 3}]
}
```

### die
```ts
{
    name: "die",
    robot_id: "1dfg1dfv1d6f516",
    events: [
      {
        event: 'lay-scraps',
        address: {x : 1, y: 3},
      }
    ]
    tiles_checked: [{x : 1, y: 3}]
}
```

### jump
```ts
{
    name: "walk",
    new_position: {x : 1, y: 3},
    robot_id: "1dfg1dfv1d6f516",
    events: [?{
      name: "bumped",
    }],
}
```

### turn-left
```ts
{
  name: 'turn-left',
  new_orientation: 'down',
  robot_id: "1dfg1dfv1d6f516",
}
```

### turn-right
```ts
{
  name: 'turn-right',
  new_orientation: 'up',
  robot_id: "1dfg1dfv1d6f516",
}
```

### hit
```ts
{
  name: "hit",
  events: [?{
      name: "destroy",
      obstacle: 'ruins',
      address: {x: 3, y 5} 
  }],
  robot_id: "1dfg1dfv1d6f516",
}
```

### get-hit
```ts
{
  name: "get-hit",
  damage: damage,
  robot_id: "1dfg1dfv1d6f516"
}
```


### check
```ts
{
  name: 'check',
  tiles_checked: [{
    ground: 'rock',
    obstacle: 'mountain',
    addresses: {x: 0, y: 7},
    items: [],
    opponent: null,
  }],
  robot_id: "1dfg1dfv1d6f516",
}