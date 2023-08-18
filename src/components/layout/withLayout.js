import Layout from './index';

const withLayout = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    );
  };
};

export default withLayout;