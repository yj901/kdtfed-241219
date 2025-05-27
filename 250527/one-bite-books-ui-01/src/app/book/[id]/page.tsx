const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      {/* Book[{id[0]} , {id[1]}] Page */}
      book{id}
    </div>
  );
};

export default Page;
