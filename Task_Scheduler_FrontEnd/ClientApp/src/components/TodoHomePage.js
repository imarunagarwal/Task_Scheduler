import React, { Component } from 'react';
import '../HomeCustomStyle.css';

export class TodoHomePage extends Component {

    constructor(props) {
        super(props);
    }
    
    //$("#sortable").sortable();
    //$("#sortable").disableSelection();

  


    //create todo
   AddToDo=(e)=> {
        e.preventDefault
        if (e.which == 13) {
            if (this.val() != '') {
                var todo =this.val();
                this.createTodo(todo);
                //countTodos();
            } else {
                // some validation
            }
        }
    }
    // mark task as done
    TaskDone=()=> {
        if (this.prop('checked')) {
            var doneItem = this.parent().parent().find('label').text();
            this.parent().parent().parent().addClass('remove');
            //done(doneItem);
           // countTodos();
        }
    }

    //delete done task from "already done"
    //RemoveItem=()=>{
    //    removeItem(this);
    //}

// count tasks
// countTodos=()=> {
//    var count = $("#sortable li").length;
//    $('.count-todos').html(count);
//}

//create task
 createTodo=(text)=> {
    var markup = '<li class="ui-state-default"><div class="checkbox"><label><input type="checkbox" value="" />' + text + '</label></div></li>';
    //$('#sortable').append(markup);
    //$('.add-todo').val('');
}

//mark task as done
//done=(doneItem)=> {
//    var done = doneItem;
//    var markup = '<li>' + done + '<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>';
//   // $('#done-items').append(markup);
//   // $('.remove').remove();
//}

//mark all tasks as done
 AllDone=() =>{
    var myArray = [];

    //$('#sortable li').each(function () {
    //    myArray.push($(this).text());
    //});

    //// add to done
    //for (i = 0; i < myArray.length; i++) {
    //    $('#done-items').append('<li>' + myArray[i] + '<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>');
    //}

    //// myArray
    //$('#sortable li').remove();
    //countTodos();
}

//remove done task from list
// removeItem=(element)=> {
//    $(element).parent().remove();
//}

        render() {
            return (
                <div classNameName="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="todolist not-done">
                                <h1>Todos</h1>
                                <input type="text" className="form-control add-todo" placeholder="Add todo" onChange={e => { this.AddToDo(e) }}></input>
                                <button className="btn btn-success" style={{ marginTop: '3%' }} onClick={e => { this.AllDone() }}>Mark all as done</button>
                                    
                                        <ul id="sortable" className="list-unstyled">
                                            <li className="ui-state-default">
                                                <div className="checkbox">
                                                    <label>
                                                    <input type="checkbox" value=""></input>Take out the trash
                                                   </label>
                                                </div>
                                            </li>
                                            <li className="ui-state-default">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" value=""></input>Buy bread</label>
                                                </div>
                                            </li>
                                            <li className="ui-state-default">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" value=""></input>Teach penguins to fly</label>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="todo-footer">
                                            <strong><span className="count-todos"></span></strong> Items Left
                                        </div>
                                    
                            </div>
                        </div>
                                <div className="col-md-6">
                                    <div className="todolist">
                                        <h1>Already Done</h1>
                                        <ul id="done-items" className="list-unstyled">
                                    <li>Some item <button className="remove-item btn btn-default btn-xs pull-right">
                                        <span className="glyphicon glyphicon-remove"></span></button>
                                    </li>
                                        </ul>
                                    </div>
                                </div>
                    </div>
                </div>
            );
        }
}

