import Header from "../components/Header";
import Footer from "../components/Footer";
import UploadImageForm from "../components/UploadImageForm";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import HandleUsers from "../components/HandleUser";

const PanelAdmin = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="flex mt-20  justify-center">
          <Card>
            <CardHeader className="justify-center">
              <p className="font-bold">Panel administrador</p>
            </CardHeader>
            <Divider />
            <CardBody>
              <UploadImageForm />
              <Divider />
              <HandleUsers />
            </CardBody>
            <CardFooter />
          </Card>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PanelAdmin;
