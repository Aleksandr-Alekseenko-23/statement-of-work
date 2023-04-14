import { useEffect, useState } from "react";
import { Alert, AlertTitle } from "@mui/material";
import { MyErrorResponse } from "../../utils/types/types";
import UserList from "../../components/User/UserList/UserList";
import { getDate } from "../../services/api/data_api";
import { User } from "../../utils/types/types";
import Section from "../../components/Common/Section/Section";
import Container from "../../components/Common/Container/Container";
import Loader from "../../components/Common/Loader/Loader";

function TweetsPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<MyErrorResponse | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getDate();
        setUsers(data);
      } catch (e: unknown) {
        setError(e as MyErrorResponse);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCards();
  }, []);

  return (
    <>
      <Section>
        <Container>
          <>
            {isLoading && <Loader />}
            {error && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error.message}
              </Alert>
            )}
            {!error && !isLoading && users.length === 0 && (
              <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                Users not found
              </Alert>
            )}
            {users.length > 0 && <UserList users={users} />}
          </>
        </Container>
      </Section>
    </>
  );
}

export default TweetsPage;
