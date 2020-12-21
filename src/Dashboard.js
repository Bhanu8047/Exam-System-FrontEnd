import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props,"props");
      }

    state = {
        papers:[],
        addPaper:false,
        quesPaper:false,
        paperId:0,
        paperContent:[]
      };
loadPapers = () => {
        var x=this.state.papers
        var js={'id':1,'title':'Paper 1','ques':[{'id':1,'q':'Ques 1','opt':['opt1','opt2','opt3','opt4']},{'id':2,'q':'Ques2','opt':['opt1','opt2','opt3','opt4']}]}
        x.push(js)
        this.setState({papers:x})
       
      };
componentWillMount(){
    //loading paper by the user id
        this.loadPapers();
}
openAddPaper(){
    this.setState({addPaper:true})
}
goToQues(e){
    var id=1
    this.setState({quesPaper:true})
    this.setState({paperId:id})
    for(var i=0;i<this.state.papers.length;i++){
        console.log("id1",id,this.state.papers[i])
        if(this.state.papers[i].id==id){
            console.log("matched")
            this.setState({paperContent:this.state.papers[i].ques})
            break;
        }
    }
}
closeQues(){
    this.setState({quesPaper:false})
}
render(){
    console.log("dbfhd",this.state.paperContent)
    return(
        <div style={{width:"80%",marginLeft: "auto",marginRight: "auto"}}>
            <div style={{textAlign:"right"}}>
            <Button style={{margin:"1%"}} variant="contained" color="secondary" onClick={this.openAddPaper.bind(this)}>
            <AddIcon style={{ color: "white"}}/>Add Paper
            </Button>
            <Button style={{margin:"1%"}} variant="contained" color="secondary">
                Manage Papers
            </Button>
            </div>
            <div>
            <TableContainer style={{width:'200'}} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell style={{textAlign:"center",color:"#006699"}}><Typography>Papers</Typography></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.state.papers.map((paper,index) => (
                    <TableRow key={paper.id} id="2" onClick={this.goToQues.bind(this)}>
                    <TableCell component="th" scope="row">
                        {paper.title}
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </div>
            <Dialog  aria-labelledby="customized-dialog-title" open={this.state.quesPaper} onClose={this.closeQues.bind(this)}>
                {/* <DialogTitle id="simple-dialog-title">View Paper</DialogTitle> */}
                <List
      
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader"  style={{backgroundColor:"#006699",color:"white"}}>
      <Typography>View Paper</Typography>
        </ListSubheader>

      }
    >
                {this.state.paperContent.map((ques,index) => {
                    return <div>
                        <ListItem>
                        
                            <ListItemText primary={ques.q} secondary=
                           
                            {ques.opt.map((options,index) => {
                                        return <div>
                                            <Typography>{options}</Typography>
                                        </div>})}
                            />
                            
                        </ListItem>
                        </div>
                })}    
    </List>
    <Button variant="contained" color="secondary" onClick={this.closeQues.bind(this)}>
            <CloseIcon style={{ color: "white"}}/>Close Paper
            </Button>
            
                </Dialog>
        </div>
    );
}
}
export default Dashboard;