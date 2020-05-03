import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Avatar } from "@material-ui/core";

const UserTodoData = (props) =>{

    return(<Paper style={{ overflow: "auto" }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Completed</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.todoData.map(data => (
          <TableRow key={data.id}>
            <TableCell>{data.title}</TableCell>
            {data.completed?<TableCell>Yes</TableCell>:<TableCell style={{color:'tomato'}}>No</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>)
}

export default UserTodoData
