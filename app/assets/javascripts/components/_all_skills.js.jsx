var AllSkills = React.createClass({
  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { console.table(response) });
  },

  render() {
    return (
      <div>
        <h1>All Skills Component Working</h1>
      </div>
    )
  }
});
