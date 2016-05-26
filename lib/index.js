const React = require('react');
const ReactDOM = require('react-dom');
const store = require('./data-store');

require('./style.scss');

class JackalList extends React.Component {
  constructor(){
    super();
    this.state = {
      list: store.all(),
    };
  }
  componentDidMount() {
    store.on('change', list => {
      this.setState({list});
    });
  }

  render (){
    const activeListItem = this.state.list(list => listItem.active);

    return (
      <div className="JackalList">
        <section className="sidebar">
          <header>
            <h1>{this.props.name}</h1>
            <CreateJackal/>
            <JackalList list={this.state.list}/>
          </header>
        </section>
        <section className="main-content">
          <ActiveJackal jackal={activeJackal}/>
        </section>
      </div>
    );
  }

}

class CreateJackal extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "",
      body: "",
    }
  };
  updateProperties(e){
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }
  createJackal(e){
    e.preventDefault();
    store.create(this.state);
    this.setState({name: "", body: ""});
  }

  render() {
    return (
      
    )
  }
}


ReactDOM.render(<JackalList title="Jackal List"/>, document.querySelector('.application'))
