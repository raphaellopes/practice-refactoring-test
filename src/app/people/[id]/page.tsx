import PeoplePage from "../../../components/person";

export default function People({ params }: any) {
  return <PeoplePage id={params.id} />;
}
