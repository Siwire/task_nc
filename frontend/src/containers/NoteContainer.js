import { connect } from 'react-redux';
import * as appActions from '../redux/appActions';
import { bindActionCreators } from 'redux';
import Main from '../components/Main';

const mapStateToProps = state => {
    return {
        noteStore: state.noteStore
    }
}
const mapDispatchToProps = dispatch => {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)