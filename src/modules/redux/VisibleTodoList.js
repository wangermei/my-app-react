import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../actions'
import { getVisibleTodos } from '../../selectors'
import TodoList from './TodoList'

const mapStateToProps = state => ({
  filteredTodos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

const VisibleTodoList =  connect(
  mapStateToProps,
  mapDispatchToProps
) (TodoList);

export default VisibleTodoList;