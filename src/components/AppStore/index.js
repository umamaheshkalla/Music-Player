import {Component} from 'react'

import TabItem from '../TabItem'

import ReactSlider from '../ReactSlick'

import AppItem from '../AppItem'

import './index.css'

const tabsList = [
  {tabId: 'ALL', displayText: 'All'},
  {tabId: 'TRENDING', displayText: 'Trending'},
  {tabId: 'NEW RELEASE', displayText: 'New Release'},
]

const appsList = [
  {
    artist: 'Norm Ender',
    cover: 'https://irshad-github.github.io/static/1.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: 'Mekanın Sahibi',
    new: true,
    source: 'https://irshad-github.github.io/static/1.mp3',
    trending: false,
    appId: 1,
    category: 'ALL',
  },
  {
    artist: 'The Stark Palace',
    cover:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: true,
    name: 'Everybody Knows',
    new: false,
    source:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3',
    trending: true,
    appId: 2,
    category: 'ALL',
  },
  {
    artist: 'The Stark Palace',
    cover:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: 'Extreme Ways',
    new: true,
    source:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3',
    trending: false,
    appId: 3,
    category: 'ALL',
  },
  {
    artist: 'Sia',
    cover:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: 'Butterflies',
    new: true,
    source:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3',
    trending: 'false',
    appId: 4,
    category: 'NEW RELEASE',
  },
  {
    artist: 'Haggard',
    cover:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: true,
    name: 'The Final Victory',
    new: true,
    source:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3',
    trending: true,
    appId: 5,
    category: 'ALL',
  },
  {
    artist: 'Haggard',
    cover:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: true,
    name: 'The Final Victory',
    new: true,
    source:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3',
    trending: true,
    appId: 5,
    category: 'NEW RELEASE',
  },
  {
    artist: 'Norm Ender',
    cover:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: 'Genius ft. Sia, Diplo, Labrinth',
    new: true,
    source:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3',
    trending: false,
    appId: 6,
    category: 'TRENDING',
  },
  {
    artist: 'Norm Ender',
    cover:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: true,
    name: 'Cro Magnon Man',
    new: true,
    source:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3',
    trending: true,
    appId: 7,
    category: 'ALL',
  },
  {
    artist: 'Grandson',
    cover: 'https://irshad-github.github.io/static/1.jpeg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: 'Overnight',
    new: false,
    source: 'https://irshad-github.github.io/static/2.mp3',
    trending: true,
    appId: 8,
    category: 'ALL',
  },
  {
    artist: 'Grandson',
    cover: 'https://irshad-github.github.io/static/2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: 'Over N Over',
    new: false,
    source:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3',
    trending: false,
    appId: 9,
    category: 'ALL',
  },
  {
    artist: 'Grandson',
    cover:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: 'Overdose',
    new: false,
    source:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3',
    trending: false,
    appId: 10,
    category: 'ALL',
  },
  {
    artist: 'Norm Ender',
    cover:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: "Rag'n'Bone Man",
    new: true,
    source:
      'https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3',
    trending: false,
    appId: 11,
    category: 'NEW RELEASE',
  },
  {
    artist: 'Norm Ender',
    cover: 'https://irshad-github.github.io/static/2v.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: 'Nightmare',
    new: false,
    source: 'https://irshad-github.github.io/static/2.mp3',
    trending: true,
    appId: 12,
    category: 'TRENDING',
  },
  {
    artist: 'The Stark Palace',
    cover: 'https://i.imgur.com/lXvsuBu.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: 'Cro Magnon Man',
    new: false,
    source: 'http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3',
    trending: true,
    appId: 13,
    category: 'ALL',
  },
  {
    artist: 'Norm Ender',
    cover: 'https://i.imgur.com/klJKSVZ.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: 'Mekanın Sahibi',
    new: false,
    source: 'http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
    trending: true,
    appId: 14,
    category: 'ALL',
  },
  {
    artist: 'Grandson',
    cover: 'https://irshad-github.github.io/static/1v.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: 'Hidden',
    new: false,
    source: 'http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3',
    trending: true,
    appId: 15,
    category: 'ALL',
  },
  {
    artist: 'Human',
    cover: 'https://irshad-github.github.io/static/5.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: 'Rag vova',
    new: true,
    source: 'https://irshad-github.github.io/static/5.mp3',
    trending: false,
    appId: 16,
    category: 'NEW RELEASE',
  },
  {
    artist: 'Lastlings',
    cover: 'https://irshad-github.github.io/static/3.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: true,
    name: 'No Time',
    new: false,
    source: 'https://irshad-github.github.io/static/7.mp3',
    trending: true,
    appId: 17,
    category: 'TRENDING',
  },
  {
    artist: 'Lastlings',
    cover: 'https://irshad-github.github.io/static/4.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: true,
    name: 'Blinding Lights',
    new: false,
    source: 'https://irshad-github.github.io/static/6.mp3',
    trending: true,
    appId: 18,
    category: 'TRENDING',
  },
  {
    artist: 'Lastlings',
    cover: 'https://irshad-github.github.io/static/5.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: 'джованна',
    new: false,
    source: 'https://irshad-github.github.io/static/8.mp3',
    trending: true,
    appId: 19,
    category: 'TRENDING',
  },
  {
    artist: 'Lastlings',
    cover: 'https://irshad-github.github.io/static/6.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: 'A Man',
    new: true,
    source: 'https://irshad-github.github.io/static/10.mp3',
    trending: true,
    appId: 20,
    category: 'TRENDING',
  },
  {
    artist: 'Human',
    cover: 'https://irshad-github.github.io/static/3.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: true,
    name: 'Unforgetting',
    new: false,
    source: 'https://irshad-github.github.io/static/4.mp3',
    trending: false,
    appId: 21,
    category: 'ALL',
  },
  {
    artist: 'Randall',
    cover: 'https://irshad-github.github.io/static/5v.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: true,
    name: 'Waharan',
    new: false,
    source: 'https://irshad-github.github.io/static/12.mp3',
    trending: true,
    appId: 22,
    category: 'ALL',
  },
  {
    artist: 'Randall',
    cover: 'https://irshad-github.github.io/static/5.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: false,
    name: 'Road Down Hill',
    new: false,
    source: 'https://irshad-github.github.io/static/11.mp3',
    trending: false,
    appId: 23,
    category: 'ALL',
  },
  {
    artist: 'Haggard',
    cover: 'https://irshad-github.github.io/static/13.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: true,
    name: 'The Final Call',
    new: false,
    source: 'https://irshad-github.github.io/static/15.mp3',
    trending: false,
    appId: 24,
    category: 'ALL',
  },
  {
    artist: 'Haggard',
    cover: 'https://irshad-github.github.io/static/13.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: true,
    name: 'The Final Call',
    new: false,
    source: 'https://irshad-github.github.io/static/15.mp3',
    trending: false,
    appId: 24,
    category: 'NEW RELEASE',
  },
  {
    artist: 'Haggard',
    cover: 'https://irshad-github.github.io/static/13.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.',
    favorited: true,
    name: 'The Final Call',
    new: false,
    source: 'https://irshad-github.github.io/static/15.mp3',
    trending: false,
    appId: 24,
    category: 'TRENDING',
  },
]

class AppStore extends Component {
  state = {onActiveTabList: tabsList[0].tabId, searchInput: ''}

  onClickCategoryItem = tabId => {
    this.setState({onActiveTabList: tabId})
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getFilteredApps = () => {
    const {onActiveTabList, searchInput} = this.state
    const filteredApps = appsList.filter(
      eachApp => eachApp.category === onActiveTabList,
    )
    const searchInputApps = filteredApps.filter(eachApp =>
      eachApp.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (searchInput === '') {
      return filteredApps
    }
    return searchInputApps
  }

  render() {
    const {onActiveTabList} = this.state
    const filteredApps = this.getFilteredApps()

    return (
      <div className="bg-container">
        <h1 className="heading">Music Player</h1>
        <div className="input-container">
          <input
            className="input"
            onChange={this.onSearchInput}
            type="search"
            placeholder="search"
          />
          <img
            className="search-icon"
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png "
          />
        </div>
        <div>
          <ul className="tab-items">
            {tabsList.map(eachItem => (
              <TabItem
                tabItemList={eachItem}
                key={eachItem.tabId}
                onClickCategoryItem={this.onClickCategoryItem}
                isActive={onActiveTabList === eachItem.tabId}
              />
            ))}
          </ul>
        </div>
        <ReactSlider />
        <ul className="app-container">
          {filteredApps.map(eachApp => (
            <AppItem key={eachApp.appId} appsList={eachApp} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AppStore
