import React, {Component} from 'react';
import {Card, Row} from "reactstrap";

export class UserList extends Component{
	
	constructor(props){
		super(props)
	}
	
	
	render() {




        return(
            <div>
                {this.props.usersList.map((usuario) => (
                    <div>
                        <Card>
                            <Row>
                                <p> Nombre: {usuario.username} </p>
                            </Row>
                            <Row>
                                <p> Nombre: {usuario.pass} </p>
                            </Row>
                            <Row>
                                <p> Nombre: {usuario.email} </p>
                            </Row>
                        </Card>
                        <br/>
                    </div>
                ))}
            </div>
        );

    }
	
}