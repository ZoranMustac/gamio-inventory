const useGamioService = () => {
  const url =
    "https://staging-nocodb.gamio.gg/api/v1/db/data/v1/Gamio-frontend-task/";
  const fetchAll = async () => {
    const all = `${url}Inventory?limit=25&shuffle=0&offset=0`;

    const response = await fetch(all, {
      method: "GET",
      headers: {
        accept: "application/json",
        "xc-token": "qlz9Adt_7mKIBz9ZPvbaupx-qc0K-v8czQDMI-cj",
      },
    });

    return response.json();
  };

  const fetchUser = async () => {
    const user = `${url}User/0`;

    const response = await fetch(user, {
      method: "GET",
      headers: {
        accept: "application/json",
        "xc-token": "qlz9Adt_7mKIBz9ZPvbaupx-qc0K-v8czQDMI-cj",
      },
    });

    return response.json();
  };

  return {
    fetchAll,
    fetchUser,
  };
};

export default useGamioService;
