# Aheli Alchemy

A fun game where players start with 5 primitive elements:

- Dirt
- Water
- Fire
- Wind
- Earth

They can mix it to create more complex elements. Here are some examples:

- mountain + rain = waterfall
- water fall + Earth = river
- Fire + Earth = Lava
- mud + mud = clay
- Volcano + sand = glass
- glass + water = wine
- Air + water = Tornado
- tornado + air = storm
- storm + rain = rain storm
- wind + water = cloud
- water + cloud = rain
- rain + fire = rainbow
- rainbow + rainbow = unicorn
- water + water = ocean
- cloud + ocean = flood
- fire + wind = volcano
- volcano + water = stone
- water + stone = sand
- water + sand = mud
- mud + water = dirty water
- dirty water + sand + stone = clean water
- fire + water = steam
- steam + fire = engine
- wind + fire = smoke
- smoke + water = fog
- Earth + Earth = mountain
- stone + water = rock
- volcano + clay = ceramic
- ceramic + stone = pottery
- ocean + ocean = sea
- stone + stone = boulder
- stone + sand = pyramid
- pyramid + Earth = sphinx
- mountain + water = lake
- fire + cloud = lightning
- pyramid + water = tomb
- mud + fire = brick
- clay + glass = vase
- brick + brick = wall
- glass + brick = window
- wall + window = house
- mud + fire + wind = bandage
- bandage + pyramid = mummy
- mummy + Earth = human
- human + mummy = ghost
- human + human = family
- wire + fire = sun

## Interface

- Start with the primitive elements on the bottom. Each could be shaped a button which could be draggable item.
- When elements are mixed, new elements would appear near the original elements. The new element could also be draggable.
- In the logic if the exact combination exists, the new element would be created. Otherwise, a new random element would be created. The random element would be from the preset elements from the list above.
- Make animation like "confetti" when new elements are created.
- For some special element like "Fire" confetti could be in fire shape. For "Water" confetti could be in water drop shape. For "Earth" confetti could be in rock shape. For "Air" confetti could be in cloud shape. For "Dirt" confetti could be in dirt shape.
- Save the state of the game in localStorage or IndexedDB so that players can continue from where they left off.
- Also have a button to reset the game to start over.
- Previous progress would be saved, annotated by date/time when the game started.
