//Reactstrap Pagination 사용
import React,{Component} from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class ReactstrapPagination extends Component{
  Pagination=(type)=>{
    alert("Go " + type)
  }

  render(){
    return(
      <>
        <Pagination size="lg" aria-lable="Page navigation example">
          <PaginationItem>
            <PaginationLink previous onClick={e=>this.pagination("previous")} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={e=>this.pagination("1")} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={e=>this.pagination("2")} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last onClick={e=>this.pagination("last")} />
          </PaginationItem>
        </Pagination>
      </>
    )
  }
}

export default ReactstrapPagination;