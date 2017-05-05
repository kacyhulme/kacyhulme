class ContactInfo extends React.Component {
  render() {
    return <div>
    <p><a href="mailto:kacy.hulme@gmail.com">Email</a></p>
    <p><a href="https://docs.google.com/document/d/1vU5q5Xz4lQ2-Ur5nVv9ZbhrVtiD861waXpq1z2dOEpo/edit?usp=sharing">Resume</a></p>
    <p>Phone: </p>
    </div>
  }
}

class KnownApps extends React.Component {
  render() {
    return <div>
    <p><b>EVERYDAY:</b><em> JavaScript, Python, Ruby, XML, JSON, HTML, CSS, git, GitHub, Werker, JIRA, Zendesk, PagerDuty, Confluence</em></p>
    <p><b>SOMETIMES:</b><em> Sass, Bootstrap, React.js, Rails, Angular.js, Ember, RSpec, Mocha, Jasmine, Testem, QUnit, Heroku, PostgreSQL, AWS, Elasticsearch, Adobe Photoshop, Adobe Illustrator, WordPress</em></p>
    </div>
  }
}

class Header extends React.Component {
  render() {
    return <div>
    <div className="header">{this.props.title}</div>
    <Body />
    
    </div>
  }
}

class Body extends React.Component {
  render() {
    return (
      <div className="flex-box-outer">
      <div>
      </div>
      <div>
      </div>
      <div>
      <ContactInfo />
      </div>
      <div>
        <KnownApps />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
      )
  }

}
