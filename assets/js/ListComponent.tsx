import * as React from 'react';

interface IProps {
    componentId: number;
}

interface IState {
    componentId: number;
    loaded: boolean;
}

const Placeholder = () => (
    <div className="placeholder">placeholder</div>
);

export default class ListComponent extends React.Component<IProps, IState> {
    private listComponentRef = React.createRef<HTMLDivElement>();

    constructor(props) {
        super(props);
        this.state = { componentId: props.componentId, loaded: false };
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
        this.lazyRender();
    }

    onScroll() {
        this.lazyRender();
    }

    lazyRender() {
        const positionTop = this.listComponentRef.current.getBoundingClientRect().top;
        console.log('positionTop', positionTop);
        if (positionTop < (window.scrollY + window.innerHeight)) {
            this.setState({loaded: true});
            window.removeEventListener('scroll', this.onScroll, false);
        }
    }

    render() {
        return (
            <div className="component" ref={this.listComponentRef}>
                {this.state.loaded ? (
                    <p>ListComponent party id = {this.state.componentId}</p>
                ) : <Placeholder />}
            </div>
        );
    }
}
