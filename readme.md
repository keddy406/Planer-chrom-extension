# TODOS

## TODO(TOGETHER): Set up the Chrome Extension App

## TODO(TOGETHER): Set up the basic strucrure of the app

#### TODO: Create a structure for action item within action-items class

#### HINTS:

- Create a div with a class `actionItem__item` 
- Duplicate it a few times

## TODO: Create HTML and Style for the header

#### HTML/CSS Structure:

```
.greeting
    h2 .greeting__type
    h2 .greeting__name
    img #greeting__image
```

#### HINTS:
- Use the `good-morning.png` image

## TODO(TOGETHER): Add circular progress 

## TODO: Create HTML and Style for Input 

#### HTML/CSS Structure:

```
.actionInput
    h5 .actionInput__text
    .actionInput__inputContainer
        form #addItemForm
            .input-group .input-group-lg
                input .form-control

```

#### HINTS:
- You have to target classes like `input::placeholder` and `input:focus` to rewrite default bootstrap styling
- You can use **Google** to figure out HOW

## TODO: Create HTML and Style for Quick Action Buttons

#### HINTS:
- You have to overwrite bootstrap classes like `.btn-outline-dark` & `.btn-outline-dark:focus` & `.btn-outline-dark:hover` 
- Use a class `actionInput__suggestions` for the parent container of the buttons inside `.actionInput__inputContainer`
- Use buttons from [here](https://getbootstrap.com/docs/4.0/components/buttons/)

## TODO: Create HTML and Style for Action Items

#### HTML Structure:

```
<div class="actionItem__item" >
   <div class="actionItem__main">
      <div class="actionItem__check">
         <div class="actionItem__checkBox">
            <i class="fas fa-check" aria-hidden="true"></i>
         </div>
      </div>
      <div class="actionItem__text">Start on Module 2</div>
      <div class="actionItem__delete"><i class="fas fa-times" aria-hidden="true"></i></div>
   </div>
</div>
```

#### HINTS:
- You need to import `fontawesome.js` that is saved in `packages` folder

## TODO(TOGETHER): Connect the Input to add Action Item to the front end 
- Handle form submission
- Create `renderActionItem()` function
- Add action item html to the action items list with class `.actionItems`

## TODO: Save the Action Item data in a database

#### HINTS:
- Save the data in Chrome Sync
- Create `add()` function
- You need to grab the list of action items first and then append the new item

## TODO: Display the list of Action Items from the database

## TODO(TOGETHER): Clean up the styling

- Clean up spacing and borders

## TODO: Create HTML and Style of the completed action item

## TODO: Add the ability to mark item completed

## TODO: Udpate items progress in progressbar

## TODO: Clean up functions and create an ActionItem Class

## TODO: Add the ability to delete action items




