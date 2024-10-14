interface slugParams {
  slug: string[];
}

interface SlugProb {
  params: slugParams;
}

function loopSlugProb(slug: string[]): JSX.Element[] {
  const slugProbList: JSX.Element[] = [];
  for (let i = 0; i < slug.length; i++) {
    slugProbList.push(
      <div key={i}>
        <h1>
          {i}. {slug[i]}
        </h1>
      </div>
    );
  }

  return slugProbList;
}

export default function nestedSlug({ params }: SlugProb) {
  return <div>{loopSlugProb(params.slug)}</div>;
}
