import ReCaptcha from 'react-google-recaptcha';

function Captcha({ setToken }) {
  const onchangeHandler = value => {
    // console.log(value);
    if (value !== null && value !== undefined) {
      setToken(value);
      console.log('user not a robot');
    } else {
      console.log('user is a robot');
    }
  };
  return (
    <>
      <br />
      <div
        style={{
          display: 'inline-block',
        }}
      >
        <ReCaptcha
          sitekey="6LfYbqofAAAAAGSm8J8Ki7enjTKGuDlGNYErbf5O"
          size="normal"
          onChange={onchangeHandler}
        />
      </div>
    </>
  );
}

export default Captcha;
