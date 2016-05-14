# react-native-picker-purejs
npm module - react native picker 

## Description
Easy to use, free to use.

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

    toggle(){
    	this.eventEmitter.emit('toggle');
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
    options={["1", "2", "3"]}
    value={"1"}
    event={self.eventEmitter} /> );
   
			
## About the styles
Put the PickerComponent at your out most ViewComponent, it default sets to 1/3 height and touch the bottom, but you can always set yourself include the code, if you work on rn project, it will be very easy to set up it.

