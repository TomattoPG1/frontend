import { auth } from '@/auth.config';
import { Title } from '@/components';
import { redirect } from 'next/navigation';
import ProfileLayout from './iu/layout';
import { FaUser } from 'react-icons/fa';
import { FaCircleUser } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";


export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }
  interface LabelProps {
    children: React.ReactNode;
  }
  
  const Label: React.FC<LabelProps> = ({ children }) => (
    <label className="block text-sm font-medium text-gray-700">{children}</label>
  );
  
  interface ReadOnlyInputProps {
    value: string;
    additionalClasses?: string;
  }

  const ReadOnlyInput: React.FC<ReadOnlyInputProps> = ({ value, additionalClasses = "" }) => (
    <input
      type="text"
      value={value}
      className={`mt-1 block w-full px-3 py-2 border border-customRed rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${additionalClasses}`}
      readOnly
    />
  );

  return (
    <ProfileLayout>
      <div className="flex flex-col items-center">
        <div className="w-3/4 bg-white w-full h-full p-6 rounded-lg shadow-md">
          <div className="flex flex-row justify-start">
            <div className='flex justify-center items-center'>
              <FaRegCircleUser className="w-10 h-10 m-2 text-gray-600" />
            </div>
            <div className="mr-10">
              <p className="text-lg font-bold">{session.user.name}</p>
              <p className="text-gray-600">{session.user.email}</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-center">Informacion de perfil</h2>
          <div className="space-y-4 m-14 mt-2 text-customGrey font-bold">
            <div>
              <Label>Id</Label>
              <ReadOnlyInput value={session.user.id} />
            </div>
            <div>
              <Label>Nombre Completo</Label>
              <ReadOnlyInput value={session.user.name} />
            </div>
            <div>
              <Label>Email</Label>
              <ReadOnlyInput value={session.user.email} />
            </div>
            <div>
              <Label>Email Verificado</Label>
              <ReadOnlyInput value={session.user.emailVerified ? session.user.email : 'El email no ha sido verificado'} />
            </div>
            <div>
              <Label>Role</Label>
              <ReadOnlyInput value={session.user.role} />
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}
