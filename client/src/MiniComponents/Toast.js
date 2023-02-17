export function Toast({toast,message}) {



    toast({
      position: 'bottom',
      duration: 2000,
      isClosable: true,
      render: () => (
        <div className='py-3 text-sm flex justify-center items-center bg-black text-white rounded-full mb-8' >
        {message}
      </div>
      ),
    });
}