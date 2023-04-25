export default class GamioService {
  public async fetchAll() {
    const url =
      "https://staging-nocodb.gamio.gg/api/v1/db/data/v1/Gamio-frontend-task/Inventory?limit=25&shuffle=0&offset=0";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        "xc-token": "qlz9Adt_7mKIBz9ZPvbaupx-qc0K-v8czQDMI-cj",
      },
    });

    const data = await response.json();
    return data;
  }

  public async fetchUser() {
    const url =
      "https://staging-nocodb.gamio.gg/api/v1/db/data/v1/Gamio-frontend-task/User/0";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        "xc-token": "qlz9Adt_7mKIBz9ZPvbaupx-qc0K-v8czQDMI-cj",
      },
    });

    const data = await response.json();
    return data;
  }
}
