import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSubreddit, invalidateSubreddit, fetchPostsIfNeeded } from '../../actions'
import Picker from './Picker'
import Posts from './Posts'

class App extends React.Component {
  componentDidMount () {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
  }

  handleChange = nextSubreddit => {
    this.props.dispatch(selectSubreddit(nextSubreddit))
  }

  handleRefreshClick = event => {
    event.preventDefault()

    const { dispatch, selectedSubreddit } = this.props
    dispatch(invalidateSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  render () {
    const { selectedSubreddit ,posts, isFetching, lastUpdated } = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
        <Picker
          value={selectedSubreddit}
          onChange={this.handleChange}
          options={[ 'reactjs', 'frontend' ]} />
        <p>
          { lastUpdated &&
            <span>
              Last updated at { new Date(lastUpdated).toLocaleTimeString() }
              { ' ' }
            </span>
          }
          { !isFetching &&
            <button onClick={this.handleRefreshClick}>
              Refresh
            </button>
          }
        </p>
        {isEmpty ? (isFetching ? <h2>...loading</h2> : <h2>Empty</h2> )
          : <div>
              <Posts posts={posts}/>
            </div>
        }
      </div>
    )
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  posts: PropTypes.array.isRequired,
  selectedSubreddit: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || { isFetching: true, items: [] }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(
  mapStateToProps
)(App)