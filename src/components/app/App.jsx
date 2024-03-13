import Sidebar from "../sidebar/Sidebar";
import Tinder from "../tinder/Tinder";
import SourceModal from "../modal/Modal";
import Layout from "../layout/Layout";

const App = () => {
  return (
    <Layout
      sidebar={(setShowModal) => <Sidebar setShowModal={setShowModal} />}
      portalContent={(showModal, setShowModal) => <SourceModal showModal={showModal} setShowModal={setShowModal} />}
    >
      <Tinder />
    </Layout>
  );
};

export default App;
