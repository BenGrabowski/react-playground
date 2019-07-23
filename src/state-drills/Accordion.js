import React from 'react';

class Accordion extends React.Component {
    // Need to set default prop for sections?
    
    state = {
        currentSectionIndex: -1
    };
    
    handleButtonClick(index) {
        if (index === this.state.currentSectionIndex) {
            this.setState({currentSectionIndex: -1})
        } else {
            this.setState({currentSectionIndex: index})
        }
        this.render()
    } 

    renderContent(index) {
        return (
            <p>{this.props.sections[index].content}</p>
        )
    }
    
    renderSections() {
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        
        return this.props.sections.map((section, index) => (
            <li>
                <button key={index} onClick={() => this.handleButtonClick(index)}>{section.title}</button>
                {this.state.currentSectionIndex === index && this.renderContent(index)}
            </li>
        ))
    }
    
    render() {
        return (
            <ul>
                {this.renderSections()}
            </ul>
        );
    }
}

export default Accordion;