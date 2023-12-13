
import { Button } from "@material-tailwind/react";
 
const GoogleAuthButton = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      
      <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3"
      >
        <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
        Continue with Google
      </Button>
    </div>
  );
}

export default GoogleAuthButton;