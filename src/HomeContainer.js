import HomeComponent from './HomeComponent';
import {connect} from 'react-redux';
import * as actionsCreators from './store/actions';


const mapStateToProps=(state)=>{
    return{
        items: state
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handleButtonClick: (item)=>dispatch(actionsCreators.addItem(item)),
        handleButtonDelete: (item)=>dispatch(actionsCreators.deleteItem(item)),
        handleEditButton: (item)=>dispatch(actionsCreators.editItem(item))
    }
}

const HomeContainer = connect(mapStateToProps,mapDispatchToProps)(HomeComponent);

export default HomeContainer;

