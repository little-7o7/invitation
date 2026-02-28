import Invitation from '../components/Invitation';

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params;
  return <Invitation lang="ru" rawName={name} />;
}
