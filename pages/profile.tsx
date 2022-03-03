import Introduction from '../components/Profile/Introduction';
import Skills from '../components/Profile/Skills';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { NextPage } from 'next';

const Profile: NextPage = () => {
  return (
    <>
      <Layout title="Profile | Adif">
        <div className="flex bg-slate-100">
          <Container>
            <Introduction />
          </Container>
        </div>
        <div className="flex bg-slate-50">
          <Container>
            <Skills />
          </Container>
        </div>
      </Layout>
    </>
  );
}

export default Profile