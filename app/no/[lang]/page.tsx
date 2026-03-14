import Invitation from '../../components/Invitation';
import { Language } from '../../components/invitation/content';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;
  return <Invitation lang={lang as Language} />;
}
