import { connect } from "react-redux";
import { sendMessage } from "../modules/chat";
import Chat from "../components/ChatView";

const mapDispatchToProps = dispatch => {
  return {
    // sendMessage: () =>
    //   dispatch({
    //     type: "TEST"
    //   })
  };
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
