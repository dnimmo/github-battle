var USER_DATA = {
  name: 'David Nimmo',
  username: 'dnimmo',
  image: 'https://avatars1.githubusercontent.com/u/1625813?v=3&s=460'
}

var React = require('react')
var ReactDOM = require('react-dom')

var ProfilePic = React.createClass({
  render: function() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
})

var Link = React.createClass({
  changeURL: function() {
    window.location.replace(this.props.href)
  },
  render: function() {
    return (
      <span 
        style={{color: 'rgba(0,0,255, 0.7)', cursor: 'pointer'}}
        onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
})

var ProfileLink = React.createClass({
  render: function() {
    return <Link href={'https://github.com/' + this.props.username}>{this.props.username}</Link>
  }
})

var ProfileName = React.createClass({
  render: function() {
    return (
      <h2>{this.props.name}</h2>
    )
  } 
})
  
var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.imageUrl} />
        <ProfileName name={this.props.name} />
        <ProfileLink username={this.props.username} />
      </div>
    ) 
  }
})  
ReactDOM.render(<Avatar imageUrl={USER_DATA.image} username={USER_DATA.username} name={USER_DATA.name} />, document.getElementById('app'))