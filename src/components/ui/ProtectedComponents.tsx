import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getUserDetailsSlice } from '../../store/storeSlices/userAuthSlice';

export default function ProtectedComponents({
  allowedRoles,
  children,
}: {
  allowedRoles: string[];
  children: ReactNode;
}) {
  const userData = useSelector(getUserDetailsSlice);
  // console.log(children);
  const hasPermission = allowedRoles.some(
    role => role === userData?.user?.role
  );
  if (!hasPermission) {
    return <></>;
  }
  return <>{children}</>;
}
