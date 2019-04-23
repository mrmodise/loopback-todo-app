import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Todo, TodoList} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {TodoRepository} from './todo.repository';

export class TodoListRepository extends DefaultCrudRepository<TodoList,
  typeof TodoList.prototype.id> {

  public readonly todos: HasManyRepositoryFactory<Todo,
    typeof TodoList.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter(TodoRepository) protected todoRepositoryGetter: Getter<TodoRepository>,
  ) {
    super(TodoList, dataSource);
    this.todos = this.createHasManyRepositoryFactoryFor('todos', todoRepositoryGetter);
  }
}
