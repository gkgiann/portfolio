export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  githubRepoUrl: string;
}

export interface ProjectPrismicResponse {
  id: string;
  data: {
    description: [
      {
        text: string;
      }
    ];
    image: {
      url: string;
    };
    title: [
      {
        text: string;
      }
    ];
    url: { url: string };
  };
}
