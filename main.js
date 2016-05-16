"use strict";
var 
_ = require('lodash'),
React = require('react-native'),

{
    StyleSheet, 
    View, 
    ScrollView,
    Component,
    Text,
    Image,
    Picker,
    Dimensions
} = React;

var
screenWidth = Dimensions.get('window').width,
screenHeight = Dimensions.get('window').height,

ActionRowHeight = 50;

class PickerComponent extends Component {

    constructor(props){
        super(props);
        var self = this;
        this.state = {
            defaultHeight: screenHeight/3,
            defaultWidth: screenWidth,
            offsetTop: props.offsetTop,

            display: false,
            key: props.key,
            value: props.value,
            options: props.options,

            buttonCancelColor: "#008CBA",
            buttonOkColor: "#008CBA"
        };
    }

    componentDidMount(){
        var self = this;
        this.props.event.addListener('toggle', this.toggle.bind(self));
    }

    toggle(ref){
        var self = this;
        if(ref == self.props._ref){
            this.setState({display: !self.state.display});
        }
    }

    cancel(){
        this.setState({display: false});
        this.props.event.emit("pickerEventCancel");
    }

    done(){
        var self = this;
        this.setState({display: false});
        this.props.event.emit("pickerEventDone" , {
            ref: self.props._ref,
            value: self.state.value
        });
    }

    onValueChange(val){
        var self = this;
        self.setState({value: val});
        this.props.event.emit("pickerEventValueChanged" , {
            ref: self.props._ref,
            value: val
        });
    }

    getPicker(){
        var 
        self = this,
        PickerItems = [];

        _.forEach(self.state.options, function (option, n) {

            PickerItems.push(
                <Picker.Item label={option} value={option} key={n}/>
            );
        });

        return (
            <View style={{

            }}>
                <Picker
                  selectedValue={self.state.value}
                  onValueChange={self.onValueChange.bind(self)}>
                    {PickerItems}
                </Picker>
            </View>);
    }

    render() {
        var 
        self = this,
        height, width,
        content, picker,
        picker;
        height = self.state.display? self.state.defaultHeight : 0;
        width = self.state.display? self.state.defaultWidth : 0;

        picker = self.getPicker();

        if(self.state.display){
            content = 
                <View style={{
                    flex: 1,
                    position: "relative"
                }}>
                    <View style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: ActionRowHeight,
                        padding: 5,
                        width: screenWidth,
                        backgroundColor: "#444444",
                        justifyContent: "center",
                        flexDirection: "row"
                    }}>
                        <View 
                        onTouchStart={()=>{ 
                            self.setState({buttonCancelColor: "#005875"}); 
                        }}
                        onTouchEnd={()=>{
                            self.setState({buttonCancelColor: "#008CBA"}); 
                            self.cancel();
                        }}
                        style={[styles.PickerButton, {backgroundColor: self.state.buttonCancelColor}]}>
                            <Text style={{
                                color: "white",
                                alignSelf: "center",
                                fontSize: 20
                            }}>Cancel</Text>
                        </View>
                        <View style={{
                            flexDirection: "column",
                            height: ActionRowHeight - 10,
                            width: screenWidth/2,
                            justifyContent: "center"
                        }}></View>

                        <View 
                        onTouchStart={()=>{ 
                            self.setState({buttonOkColor: "#005875"}); 
                        }}
                        onTouchEnd={()=>{
                            self.setState({buttonOkColor: "#008CBA"});
                            self.done(); 
                        }}
                        style={[styles.PickerButton, {backgroundColor: self.state.buttonOkColor}]}>
                            <Text style={{
                                color: "white",
                                alignSelf: "center",
                                fontSize: 20
                            }}>Ok</Text>
                        </View>
                    </View>

                    <View style={{
                        position: "absolute",
                        top: ActionRowHeight,
                        left: 0,
                        height: screenHeight/3 - ActionRowHeight,
                        padding: 0,
                        width: screenWidth,
                        //backgroundColor: "#000000",
                        // justifyContent: "center",
                        // flexDirection: "row"
                    }}>
                        {picker}
                    </View>
                </View>;
        } else {
            content = null;
        }

        return (
            <View style={{
                position: "absolute",
                width: width,
                height: height,
                top: screenHeight*2/3 - self.state.offsetTop,
                left: 0,
                backgroundColor: "#e7e7e7"
            }}>
                {content}
            </View>
        );
    }
}

var styles = StyleSheet.create({
// button clicked color #3e8e41
PickerButton: {
    flexDirection: "column",
    borderRadius: 5,
    marginLeft: 5,
    height: ActionRowHeight - 10,
    width: screenWidth/4-10,
    justifyContent: "center"
}
});

module.exports = PickerComponent;