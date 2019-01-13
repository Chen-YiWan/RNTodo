import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { Header, Body, Button, Title, Left, Right, Icon } from 'native-base';

class UIHeader extends Component{
    
    render(){
        const left = (!this.props.hasBackButton)?null:(
            <Left>
                <Button transparent onPress={()=>{ this.props.navigation.goBack() }}>
                    <Icon name="arrow-back"  style={{color: this.props.titleColor}}/>
                </Button>
            </Left>
        );

        const right = (!this.props.hasRightButton)?null:(
            <Right>
                {this.props.rightButtons}
            </Right>
        );

        return (
            <Header 
                iosBarStyle={this.props.iosBarStyle} 
                androidStatusBarColor={this.props.statusBarColor} 
                style={{backgroundColor: this.props.styleColor }}>
                {left}
                <Body>
                    <Title style={{color: this.props.titleColor}}>
                        {this.props.title}
                    </Title>
                </Body>
                {right}
            </Header>
        )
    }
}

UIHeader.propTypes = {
    iosBarStyle: PropTypes.string,
    statusBarColor: PropTypes.string,
    styleColor: PropTypes.string,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    hasBackButton: PropTypes.bool,
    hasRightButton: PropTypes.bool,
    rightButtons: PropTypes.element
}

UIHeader.defaultProps = {
    hasBackButton: false,
    hasRightButton: false,
}

export default withNavigation(UIHeader);