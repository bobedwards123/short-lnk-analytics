import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import rd3 from 'react-d3';
var Treemap = rd3.Treemap;
import FlipMove from 'react-flip-move';
import Analytics from './Analytics';



import { Links } from '../api/links';
import LinksListItem from './LinksListItem';

export default class LinksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      name: 'leo',
      treemapData: [
      
      ],
      treeData: []
    };
  }
  componentDidMount() {
    console.log('componentDidMount LinksList');
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');
      const links = Links.find({
        visible: Session.get('showVisible')
      }).fetch();
      this.setState({treemapData: []})
      links.map((link)=>{
        this.state.treemapData.push({label: link._id, value: link.visitedCount})
      })
      this.setState({ links });

      var linkData = this.state.links;
      console.log(linkData)
      
      // console.log(this.state.treeData)


    });
  }
  componentWillUnmount() {
    console.log('componentWillUnmount LinksList');
    this.linksTracker.stop();
  }
  renderLinksListItems() {
    if (this.state.links.length === 0) {
      return (
        <div className="item">
          <p className="item__status-message">No Links Found</p>
        </div>
      );
    }
    
    return this.state.links.map((link) => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>;
    });
  }
  renderAnalytics(){
    
    console.log(this.state.treemapData)

    return (
      <div className="item">
        <Treemap
          data={this.state.treemapData}
          width={450}
          height={250}
          textColor="#484848"
          fontSize="10px"
          title="Links"
        />
      </div>
    )
  }

  render() {
   
    return (
      <div>
        {this.renderAnalytics()}

        
        <FlipMove maintainContainerHeight={true}>
          {this.renderLinksListItems()}
        </FlipMove>
      </div>
    );
  }
};
