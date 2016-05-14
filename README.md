# react-native-picker-purejs
npm module - react native picker 

## Description
Easy to use, free to use.

Here is a example of how to use it.

In your RN projects.

/****************************
One dependency is needed. (EventEmitter, from React Native itself)
*****************************/


EventEmitter = require('EventEmitter'),
NPMPICKER = require("react-native-picker-purejs"),

/***************************
Init Functions need to be set up in your file. Picker call back will be those functions.
****************************/


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
    
/***************
In your JSX code, add this, remember props are important, has to have them.
****************/


  <NPMPICKER
	_ref={"test"}
	options={["1", "2", "3"]}
	value={"1"}
	event={self.eventEmitter} /> 
			
			
## very easy to use, right?

