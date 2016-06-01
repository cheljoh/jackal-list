const React = require('react');
const ReactDOM = require('react-dom');
const store = require('./data-store');

require('./reset.css');
require('./style.scss');

 class JackalList extends React.Component {
   constructor() {
     super();
     this.state = {
       jackals: store.all(),
     };
   }

   componentDidMount() {
     store.on('change', jackals => {
       this.setState({ jackals });
     });
   }

   render() {
     const activeJackal = this.state.jackals.find(jackal => jackal.active);

     return (
       <div className="JackalList">
         <section className="sidebar">
           <header>
             <h1 className="JackalTitle">Jackal List</h1>
             <JackalCount
             jackals={this.state.jackals}/>
             <UnforgivenCount
             jackals={this.state.jackals}/>
             <ForgivenCount
             jackals={this.state.jackals}/>
             <CreateJackal/>
             <JackalsList jackals={this.state.jackals}/>
           </header>
         </section>
         <section className="main-content">
           <ActiveJackal jackal={activeJackal}/>
         </section>
       </div>
     );
   }
 }

 const JackalCount = ({ jackals }) => {
   return (
       <div>Numbers of Jackals: {jackals.length}</div>
   );
 };

 const UnforgivenCount = ({ jackals }) => {
   var unforgiven = 0
   jackals.map(function(jackal){
     if (!jackal.forgiven){
       unforgiven++;
     }
   })
   return (
       <div>Numbers of Unforgiven Fools: {unforgiven}</div>
   );
 };

 const ForgivenCount = ({ jackals }) => {
   var forgiven = 0
   jackals.map(function(jackal){
     if (jackal.forgiven){
       unforgiven++;
     }
   })
   return (
       <div>Numbers of Forgiven Fools: {forgiven}</div>
   );
 };

 class CreateJackal extends React.Component {
   constructor() {
     super();
     this.state = {
       name: '',
       body: '',
     };
   }

   updateProperties(e) {
     const { name, value } = e.target;
     this.setState({ [name]: value });
   }

   createJackal(e) {
     e.preventDefault();
     store.create(this.state);
     this.setState({ name: '', body: '' });
   }

   render() {
     return (
       <div className="CreateJackal">
         <input className="CreateJackal-title"
               name="name"
               placeholder="Name"
               value={this.state.name}
               onChange={(e) => this.updateProperties(e)}
         />
         <textarea className="CreateJackal-body"
                   name="body"
                   placeholder="Body"
                   value={this.state.body}
                   onChange={(e) => this.updateProperties(e)}
         />
         <input className="CreateJackal-submit"
                type="submit"
                onClick={(e) => this.createJackal(e)}
         />
       </div>
     );
   }
 }

 const JackalsList = ({ jackals }) => {
   return (
     <div className="IdeasList">
       {jackals.map(jackal => <JackalsListItem {...jackal} key={jackal.id}/>)}
     </div>
   );
 };

//have true or false if its forgiven

 const JackalsListItem = ({ id, name, body, forgiven, active }) => {
   return (
     <div className={active ? 'JackalsListItem is-active' : 'JackalsListItem'}>
       <h3 className="JackalsListItem-title">{name}</h3>
       <div className="JackalsListItem-body">{body}</div>
       <div className="JackalsListItem-body"> {forgiven ? "They are forgiven!" : "Not forgiven :(:(:("}</div>
       <div className="JackalsListItem-buttons">
         <button onClick={() => store.select(id)}>Select</button>
         <button onClick={() => store.destroy(id)}>Destroy</button>
       </div>
     </div>
   );
 };

 const ActiveJackal = ({ jackal }) => {
   if (!jackal) { return <p className="ActiveJackal">Please select a jackal.</p>; }

   const updateJackal = (e) => {
     const { name, value } = e.target;
     store.update(jackal.id, Object.assign(jackal, { [name]: value }));
   };

   return (
     <div className="ActiveJackal">
       <input className="ActiveJackal-title"
              name="name"
              value={jackal.name}
              onChange={updateJackal}
       />
       <textarea className="ActiveJackal-body"
                 name="body"
                 value={jackal.body}
                 onChange={updateJackal}
       />
     </div>
   )
 }

 ReactDOM.render(<JackalList title="Jackal List"/>, document.querySelector('.application'));
