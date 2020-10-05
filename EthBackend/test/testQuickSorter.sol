pragma solidity 0.6.11;

import "truffle/Assert.sol";
//import "truffle/DeployedAddresses.sol";

// This test tests the QuickSort and QuickSelect functions, found in
// the Lottery contract.
// All those functions are included here, absolutely UNMODIFIED.

contract TestQuickSorter
{
    // The FinalScore structure.
    struct FinalScore {
        address payable addr;
        uint score;
    }

    // ============== [ BEGIN ] LOTTERY QUICKSORT FUNCTIONS ============== //

    /**
     *  QuickSort and QuickSelect algorithm functionality code.
     *
     *  These algorithms are used to find the lottery winners in
     *  an array of final random-factored scores.
     *  As the highest-scorers win, we need to sort an array to
     *  identify them.
     *
     *  For this task, we use QuickSelect to partition array into
     *  winner part (elements with score larger than X, where X is
     *  n-th largest element, where n is number of winners),
     *  and others (non-winners), who are ignored to save computation
     *  power.
     *  Then we sort the winner part only, using QuickSort, and
     *  distribute prizes to winners accordingly.
     */

    // Swap function used in QuickSort algorithms.
    //
    function QSort_swap( FinalScore[] memory list, 
                         uint a, uint b )               
                                                        internal pure
    {
        FinalScore memory tmp = list[ a ];
        list[ a ] = list[ b ];
        list[ b ] = tmp;
    }

    // Standard Hoare's partition scheme function, used for both
    // QuickSort and QuickSelect.
    //
    function QSort_partition( 
            FinalScore[] memory list, 
            int lo, int hi )
                                                        internal pure
    returns( int newPivotIndex )
    {
        uint pivot = list[ uint( hi + lo ) / 2 ].score;
        int i = lo - 1;
        int j = hi + 1;

        while( true ) 
        {
            do {
                i++;
            } while( list[ uint( i ) ].score > pivot ) ;

            do {
                j--;
            } while( list[ uint( j ) ].score < pivot ) ;

            if( i >= j )
                return j;

            QSort_swap( list, uint( i ), uint( j ) );
        }
    }

    // QuickSelect's Lomuto partition scheme.
    //
    function QSort_LomutoPartition(
            FinalScore[] memory list,
            uint left, uint right, uint pivotIndex )
                                                        internal pure
    returns( uint newPivotIndex )
    {
        uint pivotValue = list[ pivotIndex ].score;
        QSort_swap( list, pivotIndex, right );  // Move pivot to end
        uint storeIndex = left;
        
        for( uint i = left; i < right; i++ )
        {
            if( list[ i ].score > pivotValue ) {
                QSort_swap( list, storeIndex, i );
                storeIndex++;
            }
        }

        // Move pivot to its final place, and return the pivot's index.
        QSort_swap( list, right, storeIndex );
        return storeIndex;
    }

    // QuickSelect algorithm (iterative).
    //
    function QSort_QuickSelect(
            FinalScore[] memory list,
            int left, int right, int k )
                                                        internal pure
    returns( int indexOfK )
    {
        while( true ) {
            if( left == right )
                return left;

            int pivotIndex = int( QSort_LomutoPartition( list, 
                    uint(left), uint(right), uint(right) ) );

            if( k == pivotIndex )
                return k;
            else if( k < pivotIndex )
                right = pivotIndex - 1;
            else
                left = pivotIndex + 1;
        }
    }

    // Standard QuickSort function.
    //
    function QSort_QuickSort(
            FinalScore[] memory list,
            int lo, int hi )
                                                        internal pure
    {
        if( lo < hi ) {
            int p = QSort_partition( list, lo, hi );
            QSort_QuickSort( list, lo, p );
            QSort_QuickSort( list, p + 1, hi );
        }
    }


    // ============== [ END ]   LOTTERY QUICKSORT FUNCTIONS ============== //


    // Define test arrays.
    uint[] tarr1 = [ 1, 7, 0, 2, 5, 6, 6, 3, 0, 3 ];
    uint[] tarr2 = [ 4, 10, 0, 1, 1, 50, 67, 12, 23, 2, 6, 6, 8 ];
    uint[] tarr3 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    uint[] tarr4 = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ];
    uint[] tarr5 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    uint[] tarr6 = [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ];

    // Test the QSort functions, found on the Lottery contract.
    // perform 2 cases for each manual array sample:
    // - QuickSort an entire array.
    // - QuickSelect the middle-most element, then QuickSort
    //   the first part of array, using that element as a pivot.
    //
    function testArray( uint[] memory array )
                                                            private
    {
        // Create two FinalScore array of approppriate length.
        FinalScore[] memory finScores1 = new FinalScore[] ( array.length );
        FinalScore[] memory finScores2 = new FinalScore[] ( array.length );

        // Fill the Final Scores arrays.
        for( uint i = 0; i < array.length; i++ )
        {
            finScores1[ i ].score = array[ i ];
            finScores2[ i ].score = array[ i ];
        }

        // =================================================== //
        // Case 1: sort an entire array, and check if sorted.

        QSort_QuickSort( finScores1, 0, int( finScores1.length - 1 ) );

        for( uint i = 0; i < finScores1.length - 1; i++ )
        {
            // Check if elem[ i ] >= elem[ i + 1 ]
            Assert.isAtLeast( 
                finScores1[ i ].score, finScores1[ i + 1 ].score,
                "Assert 1 (Full QuickSort)"
            );
        }

        // =================================================== //
        // Case 2: QuickSelect, and then QuickSort by that pivot.

        int pivotIndex = QSort_QuickSelect( finScores2, 
                0, int( finScores2.length - 1 ), 
                int( finScores2.length / 2 ) );

        // Sort until that pivot index.
        QSort_QuickSort( finScores2, 0, pivotIndex );

        // Check the first part (until Pivot Index) to be sorted.
        for( uint i = 0; i < uint( pivotIndex > 0 ? pivotIndex - 1 : 0 ); i++ )
        {
            // Check if elem[ i ] >= elem[ i + 1 ]
            Assert.isAtLeast( 
                finScores2[ i ].score, finScores2[ i + 1 ].score,
                "Assert 2 (QuickSelect until Pivot)"
            );
        }

        // Check if all elements in second part are lower than pivot.
        uint pivot = finScores2[ uint( pivotIndex ) ].score;

        for( uint i = uint( pivotIndex ); i < finScores2.length - 1; i++ )
        {
            // Check if pivot >= elem[ i + 1 ]
            Assert.isAtLeast( 
                pivot, finScores2[ i + 1 ].score,
                "Assert 3 (QuickSelect after Pivot)"
            );
        }
    }

    // Test the random-generated array sample.
    function genAndTestRandomArray( uint length, uint seed )
                                                                internal
    {
        uint[] memory array = new uint[] ( length );
        uint MODULO = 10000000;

        // Fill the array with random values.
        for( uint i = 0; i < array.length; i++ )
        {
            array[ i ] = uint( keccak256( abi.encodePacked( seed, i ) ) ) %
                         MODULO;
        }

        testArray( array );
    }

    // PUBLIC TEST FUNCTIONS:

    // This is the actual test function that Truffle will run, 
    // after deploying this test contract.
    function testManualArraySamples()
                                                            public
    {
        // For each of the manualArraySamples, build a FinalScore array,
        // and then call the sorters with that array.

        testArray( tarr1 );
        testArray( tarr2 );
        testArray( tarr3 );
        testArray( tarr4 );
        testArray( tarr5 );
        testArray( tarr6 );
    }

    // Test the random-generated array samples.
    function testRandomArraySamples()
                                                            public
    {
        // Generate 3 random arrays, using keccak256 with nonces.
        genAndTestRandomArray( 100, 100 ); // Even number
        genAndTestRandomArray( 199, 199 ); // Odd number
        genAndTestRandomArray( 301, 301 ); // Odd number.
    }

}



