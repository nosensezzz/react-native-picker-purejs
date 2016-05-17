# react-native-picker-purejs
npm module - react native picker 

## how to install
under your rn project folder path
run
npm install react-native-picker-purejs --save

## Description
Easy to use, free to use.

## Props
# _ref
this one is the referance name to your component, all picker component will listen to same event, you have to use _ref to decide which component your are using.

# offsetTop
Default the picker component will have a height of 1/3 screen height, and placed at 2/3 top and 0 left, so it will cover the bottom 1/3 of the screen.
In case your view component is not start from the very top, so you can use offsetTop property to adjust the position of the picker component.

# options
Options values...

# value
default value...

# event
must have property to support the component work, it's a instance of EventEmitter, and your listeners should use the same instance too. 

Here is a example of how to use it.

In your RN projects.

    EventEmitter = require('EventEmitter'),
    NPMPICKER = require("react-native-picker-purejs"),

    componentWillMount(){
    	this.eventEmitter = new EventEmitter();
    }

    componentDidMount(){
    	var self = this;
    	self.eventEmitter.addListener('pickerEventDone', this.pickerEventDone.bind(self));
    	self.eventEmitter.addListener('pickerEventCancel', this.pickerEventCancel.bind(self));
    	self.eventEmitter.addListener('pickerEventValueChanged', this.pickerEventValueChanged.bind(self));
    }

    toggle(ref){
        this.eventEmitter.emit('toggle', ref);
    }

    pickerEventCancel(){
      // cancel button clicked
    	console.log(0);
    }

    pickerEventValueChanged(param){
      // value changed 
    	console.log(param);
    }

    pickerEventDone(param){
      // done button clicked.
    	console.log(param);
    }
    return (  
    ...
    ...
    <NPMPICKER
    _ref={"test"}
    offsetTop={60}
    options={["1", "2", "3"]}
    value={"1"}
    event={self.eventEmitter} /> );

Just call self.toggle(YourRefPickerName) at any place you want.
   
			
## About the styles
Put the PickerComponent at your out most ViewComponent, it default sets to 1/3 height and touch the bottom, but you can always set yourself include the code, if you work on rn project, it will be very easy to set up it.

## Screen shot

https://cloud.githubusercontent.com/assets/1654228/15271062/b779b7ac-1a04-11e6-928a-c3e7686b186a.png
