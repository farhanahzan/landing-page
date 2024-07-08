import { initialAboutSample } from '../../utils/sample';

type Props = {
  data: typeof initialAboutSample;
};
const AboutVarientTwo = (props: Props) => {
  const { title } = props.data;
  return <div className="text-primary">{title}</div>;
};

export default AboutVarientTwo;
