
import SellerLayout from './SellerLayout';
import Breadcrumb from './Breadcrumb';
import AddProductForm from './product/AddProductForm';

const AddProduct = () => {
  return (
    <SellerLayout >
      <div className='px-4'>
        <Breadcrumb />
        <AddProductForm />
      </div>
    </SellerLayout>
  );
};

export default AddProduct;